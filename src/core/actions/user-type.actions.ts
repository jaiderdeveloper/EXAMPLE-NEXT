"use server";
import { http } from "@/core/config/http";
import { UserTypeResponseDTO } from "@/core/dtos/user-type/user-type-response.dto";

export async function getUserTypes() {
  return await http.get<UserTypeResponseDTO[]>("/api/userType/getAll");
}
