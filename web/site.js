var config = {};

config.name = 'CircleAnywhere';
config.domain="circleanywhere.com"

config.connectSiteUrl="https://connect.circleanywhere.com"
config.mainSiteUrl = 'https://circleanywhere.com';
config.termsUrl = 'https://circleanywhere.com/terms';
config.privacyUrl = 'https://circleanywhere.com/privacy';
config.supportUrl = 'https://circleanywhere.com/support';
config.faqUrl = 'https://circleanywhere.com/faq';
config.signupUrl = 'https://payment.circleanywhere.com/signup';
config.techReportUrl = 'https://3.basecamp.com/3245986/buckets/2096187/todolists/1191126712';
config.manageSubscriptionUrl = 'https://payment.circleanywhere.com/manage-subscription';

config.twitterUsername = 'CircleAnywhere';

config.email = {};
config.email.event = {};
config.email.event.register = 'ca-event-register';
config.email.event.registerInvite = 'ca-event-register-invite';
config.email.event.registerMessage = 'ca-event-register-message';
config.email.templateVariables = {};
config.email.templateVariables.name = config.name;
config.email.templateVariables.domain = config.domain;
config.email.templateVariables.mainSiteUrl = config.mainSiteUrl;
config.email.templateVariables.connectSiteUrl = config.connectSiteUrl;
config.email.templateVariables.supportEmail = 'circleanywhere.help@gmail.com'
config.email.templateVariables.backgroundColor = '#FFFFFF';
config.email.templateVariables.accentColor = '#800000';
config.email.templateVariables.accentColorDark = '#600000';

config.template = {};
config.template.loungeInstructions = 'lounge-instructions.ejs';
config.template.signup = 'signup.ejs';

module.exports.config = config;

var db = {};

var completedTasks = {
   setDisplayName: 1496442154,
   connectivityCheck: 1496442154,
   instructionalVideoShort: 1496442154,
};

db.events = [];
db.events.push({
  title:"CircleAnywhere Lounge",
  shortName:"lounge",
  description: "Welcome to the CircleAnywhere Lounge! We provide the lounge as a community space for people to connect when no Circling events are scheduled. It currently supports twenty-four total users, inside three eight-person breakouts.",
  calendarId: "member-birthday-circling",
  eventStart: "2015-01-01T00:00:00+00:00",
  open: true,
  breakoutState: "open",
  timeZoneValue: "Etc/UTC",
  duration: 0,
  userCapacity: "medium",
  // These are converted to user IDs.
  owner_id: "111684086248650210604",
  facilitator_lead_id: "111684086248650210604",
});

db.permalinks = [];
db.permalinks.push({
  title: "Alternate breakout #1",
  description: "Click the button below to join the breakout",
  shortName: "alt-session-1",
  url: "https://hangouts.google.com/hangouts/_/w4axbux73vcmlixumxrk5hlrcye",
});
db.permalinks.push({
  title: "Alternate breakout #2",
  description: "Click the button below to join the breakout",
  shortName: "alt-session-2",
  url: "https://hangouts.google.com/hangouts/_/vrwapbspangf7oeoga7gta27vee",
});

db.users = [];
db.users.push({
  googleJson: {
    id: "111684086248650210604",
    email: "circleanywhere@gmail.com",
    verified_email: true,
    name: "Circle Anywhere",
    given_name: "Circle",
    family_name: "Anywhere",
    link: "https://plus.google.com/111684086248650210604",
    picture: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
    locale: "en",
  },
  displayName: "Circle Anywhere",
  email: "circleanywhere@gmail.com",
  googleUserId: "111684086248650210604",
  link: "https://plus.google.com/111684086248650210604",
  picture: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg",
  perms: {
    memberOnce: true,
  },
  superuser: true,
  completedTasks: completedTasks,
  configuration: {},
});

db.users.push({
  googleJson: {
    id: "112349864121259291250",
    email: "test.1.circleanywhere@gmail.com",
    verified_email: true,
    name: "Participant One",
    given_name: "Participant",
    family_name: "One",
    picture: "https://lh4.googleusercontent.com/-ox7q9IPfZhE/AAAAAAAAAAI/AAAAAAAAABE/_-70PCoNQVE/photo.jpg",
    locale: "en"
  },
  displayName: "Participant One",
  email: "test.1.circleanywhere@gmail.com",
  googleUserId: "112349864121259291250",
  picture: "https://lh4.googleusercontent.com/-ox7q9IPfZhE/AAAAAAAAAAI/AAAAAAAAABE/_-70PCoNQVE/photo.jpg",
  perms: {
    joinEvents: true,
    memberOnce: true,
  },
  completedTasks: completedTasks,
  configuration: {},
});

db.users.push({
  googleJson: {
    id: "106242390178717671247",
    email: "test.2.circleanywhere@gmail.com",
    verified_email: true,
    name: "Participant Two",
    given_name: "Participant",
    family_name: "Two",
    picture: "https://lh5.googleusercontent.com/-fUtKJ5vSdYc/AAAAAAAAAAI/AAAAAAAAAA0/QU6Gp0xdFOM/photo.jpg",
    locale: "en"
  },
  displayName: "Participant Two",
  email: "test.2.circleanywhere@gmail.com",
  googleUserId: "106242390178717671247",
  picture: "https://lh5.googleusercontent.com/-fUtKJ5vSdYc/AAAAAAAAAAI/AAAAAAAAAA0/QU6Gp0xdFOM/photo.jpg",
  perms: {
    joinEvents: true,
    memberOnce: true,
  },
  completedTasks: completedTasks,
  configuration: {},
});

for (var num = 0; num <= 59; num++) {
  var prefix = "10000000000000000000";
  if (num > 99) {
    prefix = "100000000000000000";
  }
  else if (num > 9) {
    prefix = "1000000000000000000";
  }
  var id = prefix + String(num);
  db.users.push({
    googleUserId: id,
    displayName: "Test User " + num,
    email: "test.user." + num + "@circleanywhere.com",
    picture: config.connectSiteUrl + "/public/img/custom/test-user-" + num + "-avatar.jpg",
    perms: {
      joinEvents: true,
      memberOnce: true,
    },
    googleJson: {
      id: id,
      email: "test.user." + num + "@circleanywhere.com",
      verified_email: true,
      name: "Test User " + num,
      given_name: "Test",
      family_name: "User " + num,
      picture: config.connectSiteUrl + "/public/img/custom/test-user-" + num + "-avatar.jpg",
      locale: "en",
    },
    completedTasks: completedTasks,
    configuration: {},
  });
}

module.exports.db = db;
