export default function Header({ user, onSignIn, onSignOut }) {
  return (
    <header className="header">
      <h1>SnapVault</h1>
      {user ? (
        <div>
          <span>Hello, {user.name} </span>
          <button onClick={onSignOut}>Sign out</button>
        </div>
      ) : (
        <button onClick={onSignIn}>Sign in with Google</button>
      )}
    </header>
  );
}
