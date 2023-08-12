/** 
* @swagger
* /api/admin:
*         post:
*          summary: Tizimga Admin bo'lib krish uchun
*          tags : [Admin]
*          requestBody:
*            required : true
*            content :
*               application/json:
*                 schema:
*                   type: object
*                   properties:
*                    username:
*                     type: string
*                    password:
*                     type: string
*          responses:
*           200:
*            description: Successfully get datas
*         
*        
*/