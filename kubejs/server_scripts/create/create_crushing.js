ServerEvents.recipes(event=>{
    event.custom(
        {
            "type": "create:milling",
            "ingredients": [
              {
                "item": "create:zinc_ingot"
              }
            ],
            "processingTime": 350,
            "results": [
              {
                "item": "kubejs:zinc_dust"
              },
              {
                "chance": 0.2 ,
                "item": "kubejs:zinc_dust"
              }
            ]
          }
    )

    event.custom(
      {
          "type": "create:crushing",
          "ingredients": [
            {
              "item": "create:zinc_ingot"
            }
          ],
          "processingTime": 300,
          "results": [
            {
              "item": "kubejs:zinc_dust"
            },
            {
              "chance": 1 ,
              "item": "kubejs:zinc_dust"
            }
          ]
        }
  )

    event.custom(
      {
          "type": "create:milling",
          "ingredients": [
            {
              "tag": "c:copper_ingots"
            }
          ],
          "processingTime": 350,
          "results": [
            {
              "item": "modern_industrialization:copper_dust"
            }
          ]
        }
  )

  
})