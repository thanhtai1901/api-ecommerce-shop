/**
 * @swagger
 * tags:
 *   name: Vouchers
 *   description: Operations related to vouchers
 */
/**
 * @swagger
 * /api/v1/vouchers:
 *      get:
 *          tags: [Vouchers]
 *          summary: Retrieve all vouchers
 *          responses:
 *              200:
 *                  description: Successfully retrieved all vouchers
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Voucher'
 *              500:
 *                  description: Error retrieving vouchers
 */
/**
 * @swagger
 * /api/v1/vouchers/{id}:
 *      get:
 *           tags: [Vouchers]
 *           summary: Retrieve voucher details
 *           parameters:
 *               - in: path
 *                 name: id
 *                 required: true
 *                 schema: 
 *                     type: string
 *           responses:
 *               200:
 *                   description: Successfully retrieved voucher details
 *               400:
 *                   description: Error retrieving voucher
 *               500:
 *                   description: Network error
 */
/**
 *  @swagger
 * /api/v1/vouchers/{id}:
 *  delete:
 *      tags: [Vouchers]
 *      summary: Delete a voucher
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema: 
 *                type: string
 *      responses:
 *          200:
 *              description: Successfully deleted voucher
 *          400:
 *              description: Error deleting voucher
 *          500:
 *              description: Network error
 */
/**
 *  @swagger
 * /api/v1/vouchers:
 *  post:
 *      tags: [Vouchers]
 *      summary: Add a new voucher
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Voucher'
 *      responses:
 *          200:
 *              description: Successfully added voucher
 *          400:
 *              description: Error adding voucher
 *          500:
 *              description: Network error
 */
/**
 *  @swagger
 *  /api/v1/vouchers/{id}:
 *    patch:
 *      tags: [Vouchers]
 *      summary: Update a voucher
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
 *              $ref: '#/components/schemas/Voucher'
 *      responses:
 *        200:
 *          description: Successfully updated voucher
 *        400:
 *          description: Error updating voucher
 *        500:
 *          description: Network error
 */
/**
 * @swagger
 * components:
 *  schemas: 
 *    Voucher:
 *      type: object
 *      properties:
 *          _id:
 *              type: string
 *              description: ID of the voucher
 *              example: vch0000000
 *          code: 
 *              type: string
 *              description: Code of the voucher
 *              example: SUMMER2024
 *          expiredDate:
 *              type: string
 *              format: date
 *              description: Expiration date of the voucher
 *              example: 2024-08-31
 *          pricePercent:
 *              type: number
 *              description: Discount percentage
 *              example: 20
 *          priceOrigin:
 *              type: number
 *              description: Original price before discount
 *              example: 100
 *          status:
 *              type: string
 *              description: Status of the voucher
 *              example: active/inactive
 *      required:
 *          - code
 *          - expiredDate
 *          - pricePercent
 *          - priceOrigin
 *          - status    
 */