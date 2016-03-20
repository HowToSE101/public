import test from 'tape';
import login from 'Login/reducer';

test('change username', (t) => {
  t.plan(1);

  const changedUsername = login(
    {username: 'george', password: 'bush'},
    {type: 'CHANGE_USERNAME', username: 'jeb'}
  ).username;

  t.equal(changedUsername, 'jeb');
});

test('change password', (t) => {
  t.plan(1);

  const changedPassword = login(
    {username: 'george', password: 'bush'},
    {type: 'CHANGE_USERNAME', password: 'washington'}
  ).password;

  t.equal(changedPassword, 'washington');
});
