import i18n from "lib/i18n";

export default function SignupForm({ url, locale }) {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch(
      url,
      {
        body: JSON.stringify({
          name: event.target.email.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
  }

  return (
    <form onSubmit={registerUser}>
      <div className="my-2">
        <label
          htmlFor="email"
          className="sr-only"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={i18n.newsletter.placeholder[locale]}
          required={true}
          className="w-full bg-transparent border-solid border-alt border-[1px] caret-accent appearance-none p-4"
        />
      </div>
      <div className="my-2">
        <button
          className="button-arrow -ml-4"
          type="submit">
          {i18n.newsletter.button[locale]}
        </button>
      </div>
    </form>
  )
}
