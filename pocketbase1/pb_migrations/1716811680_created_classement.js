/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fp63glgi5wnl33i",
    "created": "2024-05-27 12:08:00.511Z",
    "updated": "2024-05-27 12:08:00.511Z",
    "name": "classement",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "80cz9zhy",
        "name": "nom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "olcpmqzs",
        "name": "score",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fp63glgi5wnl33i");

  return dao.deleteCollection(collection);
})
