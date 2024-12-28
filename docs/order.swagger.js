/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Các thao tác liên quan đến đơn hàng
 */
/**
 * @swagger
 * /api/v1/orders:
 *      get:
 *          tags: [Orders]
 *          summary: Lấy tất cả đơn hàng
 *          responses:
 *              200:
 *                  description: Lấy ra tất cả đơn hàng thành công
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Order'
 *              500:
 *                  description: Lỗi khi lấy tất cả đơn hàng
 */
/**
 * @swagger
 * /api/v1/orders/{id}:
 *      get:
 *           tags: [Orders]
 *           summary: Lấy chi tiết đơn hàng
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Lấy ra chi tiết đơn hàng thành công
 *               400:
 *                   description: Lỗi khi lấy đơn hàng 
 *               500:
 *                   description: Lỗi không có mạng
 */
/**
 *  @swagger
 * /api/v1/orders/{id}:
 *  delete:
 *      tags: [Orders]
 *      summary: Xóa một đơn hàng
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Xóa đơn hàng thành công
 *          400:
 *              description: Lỗi xóa đơn hàng
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/orders:
 *  post:
 *      tags: [Orders]
 *      summary: Thêm một đơn hàng
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOrder'
 *      responses:
 *          200:
 *              description: Thêm đơn hàng thành công
 *          400:
 *              description: Lỗi thêm đơn hàng
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/orders/{id}:
 *    patch:
 *      tags: [Orders]
 *      summary: Cập nhật một đơn hàng
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
 *              $ref: '#/components/schemas/Order'
 *      responses:
 *        200:
 *          description: Cập nhật đơn hàng thành công
 *        400:
 *          description: Lỗi cập nhật đơn hàng
 *        500:
 *          description: Lỗi không có mạng
 */
/**
 * @swagger
 * components:
 *  schemas: 
 *    Order:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID của đơn hàng
 *              example: order0000000
 *          user_id:
 *              type: string
 *              description: ID của người dùng
 *              example: user0000000
 *          address:
 *              type: string
 *              description: Địa chỉ giao hàng
 *              example: 123 Đường ABC, Thành phố XYZ
 *          phone:
 *              type: string
 *              description: Số điện thoại liên hệ
 *              example: 0123456789
 *          status:
 *              type: string
 *              description: Trạng thái của đơn hàng
 *              example: pending
 *          total:
 *              type: number
 *              format: float
 *              description: Tổng giá trị của đơn hàng
 *              example: 500000
 *          createdAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian tạo đơn hàng
 *              example: 2023-10-01T12:00:00Z
 *          updatedAt:
 *              type: string
 *              format: date-time
 *              description: Thời gian cập nhật đơn hàng
 *              example: 2023-10-01T12:00:00Z
 *      required:
 *          - user_id
 *          - address
 *          - phone
 *          - status
 *          - total
 *          
 *    CreateOrder:
 *      type: object
 *      properties:
 *          user_id:
 *              type: string
 *              description: ID của người dùng
 *              example: user0000000
 *          address:
 *              type: string
 *              description: Địa chỉ giao hàng
 *              example: 123 Đường ABC, Thành phố XYZ
 *          phone:
 *              type: string
 *              description: Số điện thoại liên hệ
 *              example: 0123456789
 *          status:
 *              type: string
 *              description: Trạng thái của đơn hàng
 *              example: pending
 *          total:
 *              type: number
 *              format: float
 *              description: Tổng giá trị của đơn hàng
 *              example: 500000
 *      required:
 *          - user_id
 *          - address
 *          - phone
 *          - status
 *          - total
 */