# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`, `/stock`  | `GET`  | It is a test endpoint. |


_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| STOCK endpoints | method | Description |
| -------- | ------ | ---------------------- |
| `/stock`  | `GET`  | Retrieve stock list. |
| `/stock/:id`  | `GET`  | Retrieve specific stock item by ID. |
| `/stock`  | `POST`  | Creates a new stock resource. |
| `/stock/:id`  | `PUT`  | Update specific stock resource. Ex: reduce quantity. |
| `/stock/:id`  | `DELETE`  | Delete specific resource. |
| CUSTOMER endpoints | method | Description |
| -------- | ------ | ---------------------- |
| `/customer`  | `GET`  | Retrieve customer list. |
| `/customer/:id`  | `GET`  | Retrieve specific customer by ID. |
| `/customer`  | `POST`  | Creates a new customer. |
| `/customer/:id`  | `PUT`  | Update specific customer. Ex: update email. |
| `/customer/:id`  | `DELETE`  | Delete specific customer. |
| SEAT endpoints | method | Description |
| -------- | ------ | ---------------------- |
| `/seat`  | `GET`  | Retrieve seating list. |
| `/seat/:id`  | `GET`  | Retrieve specific seat by ID. |
| `/seat`  | `POST`  | Creates a new seat. |
| `/seat/:id`  | `PUT`  | Update specific seat. Ex: isOccupied = true. |
| `/seat/:id`  | `DELETE`  | Delete specific seat. |
| ORDER endpoints | method | Description |
| -------- | ------ | ---------------------- |
| `/order`  | `GET`  | Retrieve order list. |
| `/order/:id`  | `GET`  | Retrieve specific order by ID. |
| `/order`  | `POST`  | Creates a new order. |
| `/order/:id`  | `PUT`  | Update specific order. |
| `/order/:id`  | `DELETE`  | Delete specific order. |