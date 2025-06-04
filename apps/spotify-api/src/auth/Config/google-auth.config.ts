import {registerAs} from "@nestjs/config"


export default registerAs("googleOAuth", () => ({
    clientID: "1062648170866-slpoun1dfqd2lh5m3fg43s9kij9fhaqt.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/callback"
}))