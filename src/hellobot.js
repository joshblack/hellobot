export default function (req, res, next) {
  const { user_name: userName } = req.body;
  const payload = { text: `Hi ${userName}!` };

  return userName !== 'slackbot'
    ? res.status(200).json(payload)
    : res.status(200).end();
}
