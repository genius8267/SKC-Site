import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { NewsletterSignup } from '../NewsletterSignup';

describe('NewsletterSignup', () => {

	it('validates email address', async () => {
		render(<NewsletterSignup />);
		fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
			target: { value: 'invalid' },
		});
		const form = document.querySelector('form');
		fireEvent.submit(form!);
		await waitFor(() => {
			expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
		});
	});

  it('submits and shows success state', async () => {
		vi.useFakeTimers();
		render(<NewsletterSignup />);
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), {
      target: { value: 'team@skc.com' },
    });
		const form = document.querySelector('form');
		fireEvent.submit(form!);
		await act(async () => {
			await vi.advanceTimersByTimeAsync(1200);
		});
		expect(screen.getByText(/Successfully subscribed/i)).toBeInTheDocument();
    vi.useRealTimers();
  });
});
