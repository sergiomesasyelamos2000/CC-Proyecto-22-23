/**
 * Payload of JsonWebToken session
 */
export class JwtPayload {
  userId: string;
  //  Here we can add some other useful session parameters (E.G: some external uerId with an external API integration)

  constructor() {
    /* this.userId = null;*/
  }
}
