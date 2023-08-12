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
* /api/feed/add:
*         post:
*          summary: Feedback qoshish uchun, Faqat admin qosha oladi
*          tags : [Feedback]
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
*            summary: Uploads a file.
*            consumes:
*             - multipart/form-data
*            parameters:
*              - in: formData
*                name: upfile
*                type: file
*                description: The file to upload. 
*             
*          responses:
*            200:
*             description: Successfully get datas
*         
*        
*/

/** 
* @swagger
* /api/feed/getAll:
*         get:
*          summary: hamma Feedbackni qoshish uchun
*          tags : [Feedback]
*          responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

/** 
* @swagger
* /api/feed/getOne:
*         get:
*          summary: faqat bitta Servicesni olish uchun /:id ni kritish kerak
*          tags : [Feedback]
*         responses:
*           200:
*            description: Successfully get datas
*         
*        
*/

/** 
* @swagger
* /api/feed/del:
*         delete:
*          summary: faqat bitta Feedbackni o'chrish uchun /:id ni kritish kerak
*          tags : [Feedback]
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
* /api/feed/put:
*         put:
*          summary: Feedback o'zgarturish uchun, Faqat admin uchun /:id orqali 
*          tags : [Feedback]
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

