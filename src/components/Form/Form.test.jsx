import { render, screen } from "@testing-library/react";
import Form from ".";
import user from "@testing-library/user-event";
import { expect } from "vitest";

it("formu gönderince 'addUser' doğru parametrelerle çalışıyor mu?", async () => {
  const mock = vi.fn();

  render(<Form addUser={mock} />);

  user.setup();

  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByPlaceholderText("ör:24");
  const sendBtn = screen.getByRole("button");

  await user.type(nameInp, "eren");

  await user.type(mailInp, "eren@gmail.com");

  await user.type(ageInp, "34");

  await user.click(sendBtn);

  expect(mock).toHaveBeenCalledWith({
    name: "eren",
    email: "eren@gmail.com",
    age: "34",
  });
});
