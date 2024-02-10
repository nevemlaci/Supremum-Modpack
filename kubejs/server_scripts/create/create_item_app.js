ServerEvents.recipes(event=>{
    event.custom(
        {
            "type": "create:item_application",
            "ingredients": [
              {
                "item": "create:brass_casing"
              },
              {
                "tag": "c:steel_plates"
              }
            ],
            "results": [
              {
                "item": "create:andesite_casing"
              }
            ]
          }
    )
})