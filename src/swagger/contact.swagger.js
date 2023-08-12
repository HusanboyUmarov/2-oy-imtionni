/** 
* @swagger
*  components:
*    securitySchemes:
*      bearerAuth:
*        name : Authorization
*        type : http
*        scheme: bearer
*        bearerFormat: JWT    
*       
*/

/** 
* @swagger
* /api/contact/add:
*         post:
*          summary: Contact hamma uchun
*          tags : [Contact]
*          requestBody:
*            required : true
*            content :
*               application/json:
*                 schema:
*                   type: object
*                   properties:
*                    name:
*                     type: string
*                    phoneName:
*                     type: string
*                    email:
*                     type: string
*                    message:
*                     type: string
*          responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

/** 
* @swagger
* /api/contact/getAll:
*         get:
*          summary: hamma Servicesni qoshish uchun
*          tags : [Contact]
*          security:
*           - bearerAuth: []
*          responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

/** 
* @swagger
* /api/contact/getOne:
*         get:
*          summary: faqat bitta Contactni olish uchun /:id ni kritish kerak
*          tags : [Contact]
*          security:
*           - bearerAuth: []
*         responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

