import { getCliClient } from 'sanity/cli'
const client = getCliClient()

const query = \
          *[_type == "domain"] | order(order asc) {
            _id,
            "l1Title": title,
            "l2Categories": *[_type == "system" && references(^._id)] | order(order asc) {
              _id,
              "l2Title": title,
              "childrenNodes": *[_type in ["system", "product"] && references(^._id)] | order(order asc) {
                _id,
                title,
                "nodeType": _type,
                "slug": slug.current,
                "products": *[_type == "product" && references(^._id)] | order(order asc) {
                  _id,
                  "productTitle": title,
                  "productSlug": slug.current,
                  isFeatured
                }
              }
            }
          }
        \;
client.fetch(query).then(res => {
    console.log(JSON.stringify(res, null, 2))
}).catch(console.error)
