export const auth = (
  state: { authorized: boolean; userinfo: any } = {
    authorized: false,
    userinfo: {}
  },
  action: { type: string; result: any }
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        authorized: true,
        userinfo: action.result
      };
    case "LOGOUT":
      return {
        authorized: false,
        userinfo: {}
      };
    default:
      return state;
  }
};
