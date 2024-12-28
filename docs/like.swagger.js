/**
 * @swagger
 * tags:
 *   name: Likes
 *   description: Các thao tác liên quan đến lượt thích
 */
/**
 * @swagger
 * /api/v1/likes:
 *      get:
 *          tags: [Likes]
 *          summary: Lấy tất cả lượt thích
 *          responses:
 *              200:
 *                  description: Lấy ra tất cả lượt thích thành công
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Like'
 *              500:
 *                  description: Lỗi khi lấy tất cả lượt thích
 */
/**
 * @swagger
 * /api/v1/likes/{id}:
 *      get:
 *           tags: [Likes]
 *           summary: Lấy chi tiết lượt thích
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Lấy ra chi tiết lượt thích thành công
 *               400:
 *                   description: Lỗi khi lấy lượt thích 
 *               500:
 *                   description: Lỗi không có mạng
 */
/**
 *  @swagger
 * /api/v1/likes/{id}:
 *  delete:
 *      tags: [Likes]
 *      summary: Xóa một lượt thích
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Xóa lượt thích thành công
 *          400:
 *              description: Lỗi xóa lượt thích
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/likes:
 *  post:
 *      tags: [Likes]
 *      summary: Thêm một lượt thích
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateLike'
 *      responses:
 *          200:
 *              description: Thêm lượt thích thành công
 *          400:
 *              description: Lỗi thêm lượt thích
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/likes/{id}:
 *    patch:
 *      tags: [Likes]
 *      summary: Cập nhật một lượt thích
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema: 
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Like'
 *      responses:
 *        200:
 *          description: Cập nhật lượt thích thành công
 *        400:
 *          description: Lỗi cập nhật lượt thích
 *        500:
 *          description: Lỗi không có mạng
 */
/**
 * @swagger
 * components:
 *  schemas: 
 *    Like:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID của lượt thích
 *              example: like0000000
 *          user_id:
 *              type: string
 *              description: ID của người dùng đã thích
 *              example: user0000000
 *          menu_id:
 *              type: string
 *              description: ID của món ăn được thích
 *              example: menu0000000
 *          createdAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo lượt thích
 *              example: 2023-10-01T12:00:00Z
 *          updatedAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật lượt thích
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - user_id
 *          - menu_id
 *          
 *    CreateLike:
 *      type: object
 *      properties:
 *          user_id:
 *              type: string
 *              description: ID của người dùng đã thích
 *              example: user0000000
 *          menu_id:
 *              type: string
 *              description: ID của món ăn được thích
 *              example: menu0000000
 *      required:
 *          - user_id
 *          - menu_id
 */