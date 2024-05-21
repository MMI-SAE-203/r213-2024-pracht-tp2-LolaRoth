/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5060inrt5i47vm9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdt4kx18",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "05r32zmfs8vsouo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5060inrt5i47vm9")

  // remove
  collection.schema.removeField("mdt4kx18")

  return dao.saveCollection(collection)
})
