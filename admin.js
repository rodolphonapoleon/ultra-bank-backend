const admin = require("firebase-admin");

const serviceAccount = {
  type: "service_account",
  project_id: "bad-bank-339cf",
  private_key_id: "ecfdcd473b83a88d5342a9353948f526ceb2c348",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzPJslC7yTVCGG\nJiiRqzdjUEWL4zvKG2rHyOcfEWihCv17vzNe+DkGE85bcpmwT329V2rqp9OtbNhG\nXddPwpmxezWPedvKdOLGgQercY2qOM256k6+jkcUqg2quabTxmEXTp7QmFQ6D8BE\nNgPwDpFkZz4D2DMNNlPmmB9SDYg83h8MdV0p9AZ1AHZmlB8H9Sz8YqYAqUYaIGK8\nTKYFaJbrFigJD5ib0SUHy7pETVSMtQSoaWyC3QxF+KpRlRgdkK0k5FMQIYkB+X+x\nZh0S8udAQ3M3IsSDha1sFOqwpQGYxxMcQwWfHJJ4gkn3HYRqaA4ptiQ+tl6eNQBh\nPyLvxwSRAgMBAAECgf9KZdqNAtVaEihLY4UGpU5uwUZQGn8aFU26P+b8bmCpXpAS\n0MdyB3a9nw44+m8kHNrRWeF3WNJa89Ze3vTqMDLu1Xjiy6IzF1fj+nF3wieB6kvH\nfNdsVLWmGvz+FxgeyTZKUy544PUuyvrzu7gTg17pkWRpR1FpjcA/Wni/UzHWkWne\niwvSqIhmOAvoKD71Cd2LlAEJSDmJMDxSBOKmmu/mz0k5ZvGe37ifNZPGmB5nq8by\nmKG/JkwqQZmyqGMKeBm35GEOriURG9D5allneu7BsGp8VnKLbI4J14oNI6IUgJDz\nYS1NsbkdQquC8e3sIktwjkpGEE3z7JTjmRdPSKECgYEA7NGmBXRsQ2PKFZgqL/Ju\nvtfIQ+k/bvGG8P85nlcUk+vG3E8LZgyi+tcLKW1Qzu99rEiQqXfNmUVHYRsjd7om\nomB12BXJ2skyWdH2v7SkX9xiDOaA+uCgIXNV5PMsCiD8HQ8wdnvicClZgxyglbsC\nzyiQXmYDJCbu+Bu5+h51ArECgYEAwcEDKWpLXpaVZfQysquubXWYbXCdVtQ/iC62\nr7MrS+MZuPWFMWPsgXifFLciW8HreH3Iuv1fgam+eAe3nkiZIZgH+mRaBjjj23EU\nqiRi+lZd9R3SGeckyaU3pyr9PDO9eps4ne8rQPmVpaUeqsQU82ve5xyZJFKGi0vc\n9bm91+ECgYBG/M0UY4K0bKw97t/ugXBa+pnIaZmfKv01LnxaD2ZWtN1mWrdi/rS4\nFk/9Ogx4C2gThaj/c68Im7C61gS6te0wzVNl05ovYBIcxIh/jKmdJpWpokrVaRH3\nFPiRaacw3hRUraHsUlRdJLf1SlaEq4s7B8DG2zNj2dvWOZF0/T478QKBgQC9aTby\nEdvEiGlc1jGJwZQvpbpxopnt/GhvdVtawEkfUtAepMak1g6rM4Qw+Cc6lIThsfW9\n91yaoZp2NPUoY8hvsvR5sAjh9FOsfwu4mQG5wRzxN0nh0LmB92ZEoh4V8G7XoU7j\n9p/OUTAeUyF7x1zD6zxpqud7PsIRAwTro70XgQKBgQC5RRoBwWxqFqKY3ltsJLZh\nYtoWbU16yLV/3AGxCbzpgMHgNROwSNhnREaxm0BDAIVeN1PcKCAEz3lyzQSCkg5f\nixLLBCHnc8BFTIUWpe2KoXL7gxAE9CGCLoC5sVjY+3CM23GO8ZSxX8SMd/7SnGK/\nEE22hCTwzOOHTOQzOT+Q6A==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-zc92n@bad-bank-339cf.iam.gserviceaccount.com",
  client_id: "113442499034517602341",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zc92n%40bad-bank-339cf.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
