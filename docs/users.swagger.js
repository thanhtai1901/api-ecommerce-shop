/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Các thao tác liên quan đến người dùng
 */
/**
 * @swagger
 * /api/v1/users:
 *      get:
 *          tags: [Users]
 *          summary: Lấy tất cả người dùng
 *          responses:
 *              200:
 *                  description: Lấy ra tất cả người dùng thành công
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 *              500:
 *                  description: Lỗi khi lấy tất cả người dùng
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *      get:
 *           tags: [Users]
 *           summary: Lấy chi tiết người dùng
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Lấy ra chi tiết người dùng thành công
 *               400:
 *                   description: Lỗi khi lấy người dùng 
 *               500:
 *                   description: Lỗi không có mạng
 */
/**
 *  @swagger
 * /api/v1/users/{id}:
 *  delete:
 *      tags: [Users]
 *      summary: Xóa một người dùng
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Xóa người dùng thành công
 *          400:
 *              description: Lỗi xóa người dùng
 *          500:
 *              description: Lỗi không có mạng
 */

/**
 *  @swagger
 * /api/v1/users:
 *  post:
 *      tags: [Users]
 *      summary: Thêm một người dùng
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: Thêm người dùng thành công
 *          400:
 *              description: Lỗi thêm người dùng
 *          500:
 *              description: Lỗi không có mạng
 */
/**
 *  @swagger
 *  /api/v1/users/{id}:
 *    patch:
 *      tags: [Users]
 *      summary: Cập nhật một người dùng
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
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: Cập nhật người dùng thành công
 *        400:
 *          description: Lỗi cập nhật người dùng
 *        500:
 *          description: Lỗi không có mạng
 */

/**
 * @swagger
 * components:
 *  schemas: 
 *    User:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID của người dùng
 *              example: es0000000
 *          role: 
 *              type: string
 *              description: Vai trò của người dùng
 *              example: admin/user
 *          fullname:
 *              type: string
 *              description: Họ và tên của người dùng
 *              example: Nguyễn Văn A
 *          username: 
 *              type: string
 *              description: Tên đăng nhập của người dùng
 *              example: taideptrai
 *          email:
 *              type: string
 *              description: Địa chỉ email của người dùng
 *              example: taideptrai@example.com
 *          phone:
 *              type: string
 *              description: Số điện thoại của người dùng
 *              example: 0123456789
 *          address:
 *              type: string
 *              description: Địa chỉ của người dùng
 *              example: 123 Đường ABC, Quận 1, TP.HCM
 *          sex:
 *              type: string
 *              description: Giới tính của người dùng
 *              example: male/female/other
 *          avatar:
 *              type: string
 *              description: URL của ảnh đại diện người dùng
 *              example: http://example.com/avatar.jpg
 *      required:
 *          - username
 *          - email
 *          - role    
 */