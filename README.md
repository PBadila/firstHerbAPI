// README.md

## firstHerbAPI

This is an API to expose herbs and various information about them.

Here are the request methods:

`/herbs` - GET
- Returns a list of all available herbs

`/herbs/id/:id` - GET
- Returns a single herb by its id
- example response from `/herbs/id/3`:
```
    {
  "id": 3,
  "name": "Peppermint",
  "botanical_name": "Mentha × piperita",
  "description": "Peppermint is a refreshing herb with a strong, cooling flavor. It is commonly used to soothe digestive issues and freshen breath.",
  "consumption_method": "Peppermint can be brewed into a tea, added to baked goods, or used as a seasoning for savory dishes.",
  "herbal_actions": [
    "digestive aid",
    "antimicrobial",
    "pain relief"
  ]
}
```

`/herbs/commonName/:name` - GET
- Returns a single herb by its id
- example response from `/herbs/commonName/Peppermint`:
```
    {
  "id": 3,
  "name": "Peppermint",
  "botanical_name": "Mentha × piperita",
  "description": "Peppermint is a refreshing herb with a strong, cooling flavor. It is commonly used to soothe digestive issues and freshen breath.",
  "consumption_method": "Peppermint can be brewed into a tea, added to baked goods, or used as a seasoning for savory dishes.",
  "herbal_actions": [
    "digestive aid",
    "antimicrobial",
    "pain relief"
  ]
}
```

`/herbs/herbalAction/:action` - GET
- Returns a single herb by its id
- example response from `/herbs/herbalAction/calming`:
```
 [
  {
    "id": 1,
    "name": "Lavender",
    "botanical_name": "Lavandula angustifolia",
    "description": "Lavender is a fragrant herb with a sweet, floral flavor. It is commonly used in aromatherapy and has been found to have a calming effect on the mind and body.",
    "consumption_method": "Lavender can be brewed into a tea, added to baked goods, or used as a seasoning for savory dishes.",
    "herbal_actions": [
      "calming",
      "antidepressant",
      "antibacterial"
    ]
  },
  {
    "id": 2,
    "name": "Chamomile",
    "botanical_name": "Matricaria chamomilla",
    "description": "Chamomile is a gentle herb with a sweet, apple-like flavor. It is often used to promote relaxation and reduce anxiety.",
    "consumption_method": "Chamomile can be brewed into a tea or added to baked goods.",
    "herbal_actions": [
      "calming",
      "anti-inflammatory",
      "antispasmodic"
    ]
  }
]
```

`/herbs` - POST
- Accepts an `herb` object
- example object:

```
{
  "id": 3,
  "name": "Peppermint",
  "botanical_name": "Mentha × piperita",
  "description": "Peppermint is a refreshing herb with a strong, cooling flavor. It is commonly used to soothe digestive issues and freshen breath.",
  "consumption_method": "Peppermint can be brewed into a tea, added to baked goods, or used as a seasoning for savory dishes.",
  "herbal_actions": [
    "digestive aid",
    "antimicrobial",
    "pain relief"
  ]
}
```









