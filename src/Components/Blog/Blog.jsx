import classes from "./Blog.module.css";
const Blog = () => {
  return (
    <div className={classes.hero}>
      <h1 className="text-3xl font-bold text-gray-500 mt-4 mb-2 text-center">
        BLOG
      </h1>
      <div className={classes.qa}>
        <div className={classes.question}>
          <p>#1. Difference between SQL and NoSQL.</p>
        </div>

        <div className={classes.answer}>
          <p>
            SQL databases are used to store structured data while NoSQL
            databases like MongoDB are used to save unstructured data. MongoDB
            is used to save unstructured data in JSON format. MongoDB does not
            support advanced analytics and joins like SQL databases support. SQL
            databases use SQL (structured query language) for defining and
            manipulating the data, which is very powerful. In a NoSQL database,
            queries are focused on a collection of documents. Sometimes it is
            also called UnQL (Unstructured Query Language). Different databases
            have different syntax for using UnQL.
          </p>
        </div>

        <div className={classes.question}>
          <p>#2. What is Jwt? How does it work?</p>
        </div>
        <div className={classes.answer}>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted. A JWT is a string made up of three parts,
            separated by dots (.), and serialized using base64. In the most
            common serialization format, compact serialization, the JWT looks
            something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get
            two JSON strings: The header and the payload. The signature. The
            JOSE (JSON Object Signing and Encryption) header contains the type
            of token — JWT in this case — and the signing algorithm. The payload
            contains the claims. This is displayed as a JSON string, usually
            containing no more than a dozen fields to keep the JWT compact. This
            information is typically used by the server to verify that the user
            has permission to perform the action they are requesting. There are
            no mandatory claims for a JWT, but overlaying standards may make
            claims mandatory. For example, when using JWT as bearer access token
            under OAuth2.0, iss, sub, aud, and exp must be present. some are
            more common than others. The signature ensures that the token
            hasn&#39;t been altered. The party that creates the JWT signs the
            header and payload with a secret that is known to both the issuer
            and receiver, or with a private key known only to the sender. When
            the token is used, the receiving party verifies that the header and
            payload match the signature.
          </p>
        </div>

        <div className={classes.question}>
          <p>#3. What is difference between Javascript and NodeJs?</p>
        </div>
        <div className={classes.answer}>
          <p>
            JavaScript is a programming language, which runs in web browsers.
            Whereas Node.js is an interpreter or running environment for
            JavaScript, which holds a lot of requiring libraries and all.
          </p>
        </div>

        <div className={classes.question}>
          <p>#4. How does NodeJs handle multiple requests at the same time?</p>
        </div>
        <div className={classes.answer}>
          <p>
            Multiple clients make multiple requests to the NodeJS server. NodeJS
            receives these requests and places them into the EventQueue . NodeJS
            server has an internal component referred to as the EventLoop which
            is an infinite loop that receives requests and processes them. This
            EventLoop is single threaded.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
