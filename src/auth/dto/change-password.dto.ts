import { IsNotEmpty, Length } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty()
  @Length(6, 20)
  oldPassword: string;

  @IsNotEmpty()
  @Length(6, 20)
  newPassword: string;
}
