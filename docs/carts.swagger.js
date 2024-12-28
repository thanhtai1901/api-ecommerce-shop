/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Các thao tác liên quan đến giỏ hàng
 */
/**
 * @swagger
 * /api/v1/carts:
 *      get:
 *          tags: [Carts]
 *          summary: Lấy tất cả giỏ hàng
 *          responses:
 *              200:
 *                  description: Lấy ra tất cả giỏ hàng thành công
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Cart'
 *              500:
 *                  description: Lỗi khi lấy tất cả giỏ hàng
 */
/**
 * @swagger
 * /api/v1/carts/{id}:
 *      get:
 *           tags: [Carts]
 *           summary: Lấy chi tiết giỏ hàng
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Lấy ra chi tiết giỏ hàng thành công
 *               400:
 *                   description: Lỗi khi lấy giỏ hàng 
 *               500:
 *                   description: Lỗi không có mạng
 */
/**
 *  @swagger
 * /api/v1/carts/{id}:
 *  delete:
 *      tags: [Carts]
 *      summary: Xóa một giỏ hàng
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Xóa giỏ hàng thành công
 *          400:
 *              description: Lỗi xóa giỏ hàng
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/carts:
 *  post:
 *      tags: [Carts]
 *      summary: Thêm một giỏ hàng
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/createCart'
 *      responses:
 *          200:
 *              description: Thêm giỏ hàng thành công
 *          400:
 *              description: Lỗi thêm giỏ hàng
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/carts/{id}:
 *    patch:
 *      tags: [Carts]
 *      summary: Cập nhật một giỏ hàng
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
 *              $ref: '#/components/schemas/Cart'
 *      responses:
 *        200:
 *          description: Cập nhật giỏ hàng thành công
 *        400:
 *          description: Lỗi cập nhật giỏ hàng
 *        500:
 *          description: Lỗi không có mạng
 */
/**
 * @swagger
 * components:
 *  schemas: 
 *    Cart:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID của giỏ hàng
 *              example: cart0000000
 *          user_id:
 *              type: string
 *              description: ID của người dùng
 *              example: user0000000
 *          totals:
 *              type: number
 *              format: float
 *              description: Tổng giá trị của giỏ hàng
 *              example: 50000
 *          items:
 *              type: array
 *              items:
 *                  type: object
 *                  properties:
 *                      menu_id:
 *                          type: string
 *                          description: ID của món ăn trong giỏ hàng
 *                          example: menu0000000
 *                      quantity:
 *                          type: number
 *                          description: Số lượng món ăn
 *                          example: 2
 *          createAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo giỏ hàng
 *              example: 2023-10-01T12:00:00Z
 *          updateAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật giỏ hàng
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - user_id
 *          - totals
 *          
 *    createCart:
 *      type: object
 *      properties:
 *          user_id:
 *              type: string
 *              description: ID của người dùng
 *              example: user0000000
 *          items:
 *              type: array
 *              items:
 *                  type: object
 *                  properties:
 *                      menu_id:
 *                          type: string
 *                          description: ID của món ăn trong giỏ hàng
 *                          example: menu0000000
 *                      quantity:
 *                          type: number
 *                          description: Số lượng món ăn
 *                          example: 2
 *          totals:
 *              type: number
 *              format: float
 *              description: Tổng giá trị của giỏ hàng
 *              example: 50000
 *      required:
 *          - user_id
 *          - items
 *          - totals
 */