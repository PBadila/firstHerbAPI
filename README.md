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









