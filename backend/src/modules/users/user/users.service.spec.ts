import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("Debería estar definido el servicio", () => {
    expect(service).toBeDefined();
  });

  it("Debería existir usuario", () => {
    expect(service.id()).toBe("2");
  });

  it("No debería existir usuario", () => {
    expect(service.id()).not.toBe("false");
  });

  it("Debería existir el ISBN de un usuario", () => {
    expect(service.email()).toBe("sergio@gmail.com");
  });

  it("No debería existir el ISBN de un usuario", () => {
    expect(service.email()).not.toBe("false");
  });

  it("Debería existir el name de un usuario", () => {
    expect(service.name()).toBe("Sergio");
  });

  it("No debería existir el name de un usuario", () => {
    expect(service.name()).not.toBe("false");
  });

  it("Debería existir el type de un usuario", () => {
    expect(service.password()).toBe("1234");
  });

  it("No debería existir el type de un usuario", () => {
    expect(service.password()).not.toBe("false");
  });

  it("Debería existir el description de un usuario", () => {
    expect(service.surname()).toBe("Mesas");
  });

  it("No debería existir el description de un usuario", () => {
    expect(service.surname()).not.toBe("false");
  });

  it("No debería devolver nada", () => {
    expect(service.userId(0)).toBe(undefined);
  });
});
