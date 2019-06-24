// NOTES SHOW tags
SELECT "tags".* FROM "tags" INNER JOIN "taggings" ON "tags"."id" = "taggings"."tag_id" WHERE "taggings"."taggable_id" = $1 AND "taggings"."taggable_type" = $2 AND taggings.context = 'instructions' ORDER BY slug

// TAGS- INDEX
SELECT  tags.*, taggings.tags_count AS count FROM \"tags\" JOIN (SELECT taggings.tag_id, COUNT(taggings.tag_id) AS tags_count FROM \"taggings\" INNER JOIN notes ON notes.id = taggings.taggable_id WHERE (taggings.taggable_type = 'Note' AND taggings.context = 'tags') AND (taggings.taggable_id IN(SELECT notes.id FROM \"notes\" WHERE \"notes\".\"active\" = 't' AND \"notes\".\"hide\" = 'f'  ORDER BY weight ASC, external_updated_at DESC)) GROUP BY taggings.tag_id HAVING COUNT(taggings.tag_id) > 0 AND COUNT(taggings.tag_id) >= 2) AS taggings ON taggings.tag_id = tags.id  ORDER BY slug LIMIT 120 OFFSET 0


SELECT tags.*
FROM tags
JOIN
  (SELECT taggings.tag_id,
          COUNT(taggings.tag_id) AS tags_count
   FROM taggings
   INNER JOIN notes ON notes.id = taggings.taggable_id
   WHERE (taggings.taggable_type = 'Note'
          AND taggings.context = 'tags')
     AND (taggings.taggable_id IN
            (SELECT notes.id
             FROM notes
             WHERE notes.active = 't'
               AND notes.hide = 'f'
             ORDER BY weight ASC, external_updated_at DESC))
   GROUP BY taggings.tag_id
   HAVING COUNT(taggings.tag_id) >= 2) AS taggings ON taggings.tag_id = tags.id
ORDER BY slug
LIMIT 120
OFFSET 0
