import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
describe("UsersController", () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("GET /user - Debería ser un usuario", () => {
    const result = {
      id: "2",
      email: "sergio@gmail.com",
      name: "Pepe",
      password: "1234",
      surname: "Mesas",
    };

    jest.spyOn(service, "userId").mockImplementation(() => result);

    expect(controller.userId(3)).toBe(result);
  });

  it("GET /user/1- Debería ser un usuario concreto", () => {
    const result = "Usuario 1";
    jest.spyOn(service, "userId").mockImplementation(() => result);
    expect(controller.userId(3)).toBe(result);
  });

  it("POST /user/2 - Debería crear un nuevo usuario", () => {
    const result = service.create();
    jest.spyOn(service, "create");
    expect(controller.create()).toStrictEqual(result);
  });

  it("PUT /user/2 - Debería actualizar un usuario", () => {
    const result = service.update(2);
    jest.spyOn(service, "update");
    expect(controller.update(2)).toBe(result);
  });

  it("DELETE /user/2 - Debería eliminar un usuario", () => {
    jest.spyOn(service, "delete")
    expect(controller.delete(2)).toBe(2);
  });
});
