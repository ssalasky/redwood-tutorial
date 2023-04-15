import { render, screen, waitFor } from '@redwoodjs/testing/web'

import BlogLayout from './BlogLayout'

const EMAIL = 'test@gmail.com'
const loggedIn = () => {
  mockCurrentUser({
    email: EMAIL,
    id: 0,
  })
}
const loggedOut = () => {
  mockCurrentUser(null)
}

describe('BlogLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogLayout />)
    }).not.toThrow()
  })

  it('displays a login link when not logged in', async () => {
    loggedOut()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText('Login')).toBeInTheDocument())
  })

  it('displays a Logout link when logged in', async () => {
    loggedIn()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText('Logout')).toBeInTheDocument())
  })

  it("displays a logged in user's email address", async () => {
    loggedIn()
    render(<BlogLayout />)

    await waitFor(() => expect(screen.getByText(EMAIL)).toBeInTheDocument())
  })
})
