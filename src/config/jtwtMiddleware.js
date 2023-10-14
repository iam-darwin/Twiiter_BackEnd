import JWT from "passport-jwt";

const JwtStrategy = JWT.Strategy
const ExtractJwt =JWT.ExtractJwt

const opts={
    jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey :"twitter_secret"
}

export const passportAuth= async (passport)=>{
    passport.use(new JwtStrategy(opts,function(jwt_payload,done){
        
    }))
}