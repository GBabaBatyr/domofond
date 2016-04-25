AccountsTemplates.configure({
    confirmPassword: true,
    enablePasswordChange: true,
    overrideLoginErrors: false,
    showLabels: false,
    showPlaceholders: true,
    continuousValidation: true,
    negativeValidation: true,
    positiveValidation: true,
    negativeFeedback: true,
    positiveFeedback: true,
    showValidating: true,
    texts: {
        signInLink_link: 'Log in',
        signUpLink_link: 'Register',
        button: {
            signIn: 'Log in',
            signUp: 'Register',
            changePwd: 'Change password'
        },
        title: {
            signIn: 'Log In',
            signUp: 'Register',
            changePwd: 'Change password'
        }
    }
});

AccountsTemplates.configureRoute('changePwd');

AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "displayName",
        type: "text",
        displayName: "Display Name: ",
        placeholder: {
            signIn: 'Display Name: ',
            signUp: 'Display Name: '
        },
        required: true,
        minLength: 5,
        maxLength: 40
    },
    {
        _id: "username",
        type: "text",
        displayName: "User ID: ",
        placeholder: {
            signIn: 'User ID: ',
            signUp: 'User ID: '
        },
        required: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 20,
        re: /^[a-zA-Z0-9]+$/,
        errStr: "Only alphanumeric, -, _ characters are permitted!"
    },
    {
        _id: 'password',
        type: 'password',
        required: true,
        trim: true,
        minLength: 10,
        placeholder: {
          signIn: 'Password:',
          signUp: 'Password:'
        }
    }
]);

// AccountsTemplates.configure({
//     // Behavior
//     confirmPassword: true,
//     enablePasswordChange: true,
//     forbidClientAccountCreation: false,
//     overrideLoginErrors: true,
//     sendVerificationEmail: false,
//     lowercaseUsername: false,
//     focusFirstInput: true,

//     // Appearance
//     showAddRemoveServices: false,
//     showForgotPasswordLink: false,
//     showLabels: true,
//     showPlaceholders: true,
//     showResendVerificationEmailLink: false,

//     // Client-side Validation
//     continuousValidation: false,
//     negativeFeedback: false,
//     negativeValidation: true,
//     positiveValidation: true,
//     positiveFeedback: true,
//     showValidating: true,

//     // Privacy Policy and Terms of Use
//     privacyUrl: 'privacy',
//     termsUrl: 'terms-of-use',

//     // Redirects
//     homeRoutePath: '/home',
//     redirectTimeout: 4000,

//     // Hooks
//     // onLogoutHook: myLogoutFunc,
//     // onSubmitHook: mySubmitFunc,
//     // preSignUpHook: myPreSubmitFunc,
//     // postSignUpHook: myPostSubmitFunc,

//     // Texts
//     texts: {
//         navSignIn: "Agza bolmak",
//         navSignOut: "signOut",
//         optionalField: "optional",
//         pwdLink_pre: "",
//         pwdLink_link: "forgotPassword",
//         pwdLink_suff: "",
//         sep: "OR",
//         signInLink_pre: "eger siz on agza bolsanyz",
//         signInLink_link: "signIn",
//         signInLink_suff: "",
//         signUpLink_pre: "Öň agza däl bolsanyz",
//         signUpLink_link: "signUp",
//         signUpLink_suff: "",
//         socialAdd: "add",
//         socialConfigure: "configure",
//         socialIcons: {
//             "meteor-developer": "fa fa-rocket",
//         },
//         socialRemove: "remove",
//         socialSignIn: "signIn",
//         socialSignUp: "signUp",
//         socialWith: "with",
//         termsPreamble: "clickAgree",
//         termsPrivacy: "privacyPolicy",
//         termsAnd: "and",
//         termsTerms: "terms",
//     },
// });
// AccountsTemplates.configure({
//     texts: {
//         button: {
//           changePwd: "Password Text",
//           enrollAccount: "Enroll Text",
//           forgotPwd: "Forgot Pwd Text",
//           resetPwd: "Reset Pwd Text",
//           signIn: "Sign In Text",
//           signUp: "Sign Up Text",
//         }
//     }
// });
// var pwd = AccountsTemplates.removeField('password');
// AccountsTemplates.removeField('email');
// AccountsTemplates.addFields([
//   {
//       _id: "username",
//       type: "text",
//       displayName: "username",
//       required: true,
//       minLength: 5,
//   },
  
//   {
//       _id: 'username_and_email',
//       type: 'text',
//       required: true,
//       displayName: "Login",
//   },
//   pwd
// ]);
