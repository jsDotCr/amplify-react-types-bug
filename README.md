# How to reproduce

1. `npm install` (tried on node v10.16.3, v12.11.0)
2. `npm test`

Bug reference: <https://github.com/aws-amplify/amplify-js/issues/4186>

## Result

```sh
> tsc --noEmit

node_modules/aws-amplify-react/lib/Auth/AuthPiece.d.ts:26:25 - error TS2536: Type 'Props["usernameAttributes"]' cannot be used to index type '{ [UsernameAttributes.EMAIL]: string; [UsernameAttributes.PHONE_NUMBER]: string; [UsernameAttributes.USERNAME]: string; }'.

 26     getUsernameLabel(): {
                            ~
 27         [UsernameAttributes.EMAIL]: string;
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
... 
 29         [UsernameAttributes.USERNAME]: string;
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 30     }[Props["usernameAttributes"]];
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 1 error.

npm ERR! Test failed.  See above for more details.
```
