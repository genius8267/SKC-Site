import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ContactForm } from '../ContactForm';

describe('ContactForm', () => {

  it('shows validation errors when submitting empty form', async () => {
    render(<ContactForm />);

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    });
  });

	it('submits form and shows success message', async () => {
		vi.useFakeTimers();
		render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Jane Builder' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'jane@skc.com' } });
    fireEvent.change(screen.getByLabelText(/Subject/i), { target: { value: 'general' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Looking to discuss copper foil pilots.' } });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

		await act(async () => {
			await vi.runAllTimersAsync();
		});

		expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument();
		vi.useRealTimers();
	});
});
