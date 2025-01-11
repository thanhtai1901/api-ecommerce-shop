/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Các thao tác liên quan đến xác thực người dùng
 */

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Đăng ký người dùng mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Địa chỉ email của người dùng
 *                 example: taideptrai@example.com
 *               password:
 *                 type: string
 *                 description: Mật khẩu của người dùng
 *                 example: password123
 *               username:
 *                 type: string
 *                 description: Tên đăng nhập của người dùng
 *                 example: taideptrai
 *               role:
 *                 type: string
 *                 description: Vai trò của người dùng
 *                 example: user
 *     responses:
 *       201:
 *         description: Đăng ký thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *                 status:
 *                   type: integer
 *                   example: 201
 *       400:
 *         description: Email đã tồn tại hoặc dữ liệu không hợp lệ
 *       500:
 *         description: Lỗi máy chủ nội bộ

 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Đăng nhập người dùng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Địa chỉ email của người dùng
 *                 example: taideptrai@example.com
 *               password:
 *                 type: string
 *                 description: Mật khẩu của người dùng
 *                 example: password123
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     userData:
 *                       type: object
 *                       properties:
 *                         token:
 *                           type: string
 *                           description: Token truy cập
 *                           example: abc123token
 *                         refreshToken:
 *                           type: string
 *                           description: Token làm mới
 *                           example: xyz123refreshtoken
 *                         _id:
 *                           type: string
 *                           description: ID của người dùng
 *                           example: es0000000
 *                         username:
 *                           type: string
 *                           description: Tên đăng nhập của người dùng
 *                           example: taideptrai
 *                         email:
 *                           type: string
 *                           description: Địa chỉ email của người dùng
 *                           example: taideptrai@example.com
 *                         role:
 *                           type: string
 *                           description: Vai trò của người dùng
 *                           example: user
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Đăng nhập thành công"
 *       401:
 *         description: Thông tin đăng nhập không hợp lệ
 *       500:
 *         description: Lỗi máy chủ nội bộ
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: ID của người dùng
 *           example: es0000000
 *         role:
 *           type: string
 *           description: Vai trò của người dùng
 *           example: admin/user
 *         fullname:
 *           type: string
 *           description: Họ và tên của người dùng
 *           example: Nguyễn Văn A
 *         username:
 *           type: string
 *           description: Tên đăng nhập của người dùng
 *           example: taideptrai
 *         email:
 *           type: string
 *           description: Địa chỉ email của người dùng
 *           example: taideptrai@example.com
 *         phone:
 *           type: string
 *           description: Số điện thoại của người dùng
 *           example: 0123456789
 *         address:
 *           type: string
 *           description: Địa chỉ của người dùng
 *           example: 123 Đường ABC, Quận 1, TP.HCM
 *         sex:
 *           type: string
 *           description: Giới tính của người dùng
 *           example: male/female/other
 *         avatar:
 *           type: string
 *           description: URL của ảnh đại diện người dùng
 *           example: http://example.com/avatar.jpg
 *       required:
 *         - username
 *         - email
 *         - role
 */