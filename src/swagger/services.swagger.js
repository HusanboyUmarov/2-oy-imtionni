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
* /api/ser/add:
*         post:
*          summary: Services qoshish uchun, Faqat admin qosha oladi
*          tags : [Services]
*          security:
*           - bearerAuth: []
*          requestBody:
*            required : true
*            content :
*               application/json:
*                 schema:
*                   type: object
*                   properties:
*                    name:
*                     type: string
*                    description:
*                     type: string
*          responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

/** 
* @swagger
* /api/ser/getAll:
*         get:
*          summary: hamma Servicesni qoshish uchun
*          tags : [Services]
*          responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

/** 
* @swagger
* /api/ser/getOne:
*         get:
*          summary: faqat bitta Servicesni olish uchun /:id ni kritish kerak
*          tags : [Services]
*         responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

/** 
* @swagger
* /api/ser/del:
*         delete:
*          summary: faqat bitta Servicesni o'chrish uchun /:id ni kritish kerak
*          tags : [Services]
*          security:
*           - bearerAuth: []
*         responses:
*           200:
*            description: Successfully get datas
*         
*        
*/


/** 
* @swagger
* /api/ser/put:
*         put:
*          summary: Services o'zgarturish uchun, Faqat admin uchun /:id orqali 
*          tags : [Services]
*          security:
*           - bearerAuth: []
*          requestBody:
*            required : true
*            content :
*               application/json:
*                 schema:
*                   type: object
*                   properties:
*                    name:
*                     type: string
*                    description:
*                     type: string
*          responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

