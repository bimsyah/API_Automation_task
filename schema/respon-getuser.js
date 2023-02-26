const getUserSchemaRespon = {
    "type": "object",
    "required": [
        "id",
        "firstName",
        "lastName",
        "age",
        "occupation",
        "nationality",
        "hobbies",
        "gender",
        "createdDate",
        "updatedDate"
    ],
    "additionalProperties": false,
    "properties": {
        "id": {
            "type": "string"
        },
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "age": {
            "type": "integer"
        },
        "occupation": {
            "type": "string"
        },
        "nationality": {
            "type": "string"
        },
        "hobbies": {
            "type": "array",
            "additionalItems": false,
            "items": {
                "type": "string"
            },
            "uniqueItems": false
        },
        "gender": {
            "type": "string"
        },
        "createdDate": {
            "type": "string"
        },
        "updatedDate": {
            "type": "null"
        }
    }
};

module.exports = {
getUserSchemaRespon,
}