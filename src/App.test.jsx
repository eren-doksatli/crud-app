import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import user from "@testing-library/user-event";

it("Uygulama doğru şekilde çalışıyor mu?", async () => {
  render(<App />);
  user.setup();

  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const ageInp = screen.getByPlaceholderText("ör:24");
  const sendBtn = screen.getByRole("button", {
    name: "Kullanıcı Ekle",
  });

  await user.type(nameInp, "Veli");
  await user.type(mailInp, "veli@gmail.com");
  await user.type(ageInp, "24");

  await user.click(sendBtn);

  screen.getByRole("cell", { name: "Veli" });
  screen.getByRole("cell", { name: "veli@gmail.com" });
  screen.getByRole("cell", { name: "24" });
});

const multiple = (a, b, c) => {
  return a * b * c;
};

describe("Ekleme fonksiyonu testleri", () => {
  it("pozitif sayılarda doğru sonuç veriyor mu?", () => {
    const sum = multiple(10, 2, 3);

    expect(sum).toBe(60);
  });

  it("Negatif sayılarda doğru sonuç veriyor mu?", () => {
    const sum = multiple(-10, -2, -3);

    expect(sum).toBe(-60);
  });

  it("0 olunca doğru sonuç veriyor mu?", () => {
    const sum = multiple(0, 2, 3);

    expect(sum).toBe(0);
  });
});
