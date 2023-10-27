/**
 * @swagger
 * /counters/{name}:
 *  get:
 *      tags:
 *              - Available Endpoints
 *      parameters:
 *          -   in: path
 *              name: name
 *              required: true
 *              example: Shreyas
 *      description: <b>Route to get the user counters from the Database.</b>
 *      responses:
 *        '200':
 *            description: Array of Objects containing every counters related to the user.
 *        '400':
 *            description: In case no data in DB - returns a error message stating No data found
 *        '500':
 *            description: In case of server error - returns a error message stating server error with error data
 *
 * /counter-add/{name}:
 *  post:
 *      tags:
 *              - Available Endpoints
 *      parameters:
 *          -   in: path
 *              name: name
 *              required: true
 *              example: Shreyas
 *          -   in: body
 *              name: counter
 *              description: the counter object
 *              schema:
 *                  type: object
 *                  required:
 *                      -counterName
 *                      -currentCount
 *                  properties:
 *                      counterName:
 *                          type: string
 *                      currentCount:
 *                          type: number
 *
 *      description: <b>Route to add a new counter to the Database.</b> <br/><br/> <b>Example Existing Name </b> - <u>Shreyas</u>- This is an existing Name in the DB which returns a Object with the following data of a Specific User - the Name & Counter array. <br/><br/> <b>Example Non Existing Name </b> - <u> ShreyasB </u> - This creates a new document with the name ShreyasB and adds the counter to its counter array . <br/><br/> <b>Example incomplete data in req body </b> - <u> example - without counter object or partial object </u> - This is an invalid and this returns a 400 error stating Incomplete data
 *      responses:
 *        '200':
 *            description: message success in case the counter is added successfully
 *        '400':
 *            description: In case of incomplete data in request body - message Incomplete data
 *        '500':
 *            description: In case of server error - returns a error message stating server error with error data
 * /counter-mod/{name}:
 *  patch:
 *      tags:
 *              - Available Endpoints
 *      parameters:
 *          -   in: path
 *              name: name
 *              required: true
 *              example: Shreyas
 *          -   in: body
 *              name: counter
 *              description: the counter object
 *              schema:
 *                  type: object
 *                  required:
 *                      -counterName
 *                      -currentCount
 *                  properties:
 *                      id:
 *                          type: string
 *                      currentCount:
 *                          type: number
 *
 *      description: <b>Route to modify an existing counter in the Database. Need to provide name in params, and id and currentCount in body</b>
 *      responses:
 *        '200':
 *            description: message success in case the counter is modified successfully
 *        '400':
 *            description: In case of incomplete data in request body - message Incomplete data
 *        '500':
 *            description: In case of server error - returns a error message stating server error with error data
 * /counter-delete/{name}:
 *  patch:
 *      tags:
 *              - Available Endpoints
 *      parameters:
 *          -   in: path
 *              name: name
 *              required: true
 *              example: Shreyas
 *          -   in: body
 *              name: counter
 *              description: the counter object
 *              schema:
 *                  type: object
 *                  required:
 *                      -counterName
 *                      -currentCount
 *                  properties:
 *                      counterName:
 *                          type: string
 *                      currentCount:
 *                          type: number
 *
 *      description: <b>Route to delete a existing counter in the Database.</b> <br/><br/> <b>Example Existing Name & counter </b> - <u>Shreyas</u>- This is an existing Name in the DB, This finds the counter object in the counterArray and removes it from the array. <br/><br/> <b>Example Non Existing Name </b> - <u> ShreyasB </u> - This returns a response from a server saying no data found . <br/><br/> <b>Example incomplete data in req body </b> - <u> example - without counter object or partial object </u> - This is an invalid and this returns a 400 error stating Incomplete data
 *      responses:
 *        '200':
 *            description: message success if counter is deleted
 *        '400':
 *            description: In case of invalid id returns a error message stating No data found
 *        '500':
 *            description: In case of server error - returns a error message stating server error with error data
 */
