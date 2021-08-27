---
title: convertkit
date: '2021-07-29'
tags: ['draft']
---


# custom fields

docs: https://developers.convertkit.com/#list-fields


## list custom fields
*...to get custom field ID needed to update given field*

**Endpoint**

`GET /v3/custom_fields`

**Required parameters**

-   `api_key` - Your account API key.

```bash
curl -X GET 'https://api.convertkit.com/v3/custom_fields?api_key=<your_public_api_key>'
```


## update field

**Endpoint**
`PUT /v3/custom_fields/#{your custom field ID}`

**Required parameters**
-   `api_secret` - Your api secret key.
-   `id` - The ID of your custom field.
-   `label` - The label of the custom field.

```bash
curl -X PUT https://api.convertkit.com/v3/custom_fields/1\
     -H 'Content-Type: application/json'\
     -d '{ "api_secret": "<your_secret_api_key>",
           "label": "Profession" }'
```