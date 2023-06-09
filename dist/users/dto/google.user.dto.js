"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GoogleUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Petro', description: 'User first name' }),
    __metadata("design:type", String)
], GoogleUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Poroshenko', description: 'User last name' }),
    __metadata("design:type", String)
], GoogleUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'poroshenko@gmail.com', description: 'User email' }),
    __metadata("design:type", String)
], GoogleUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Petro-123545', description: 'User password' }),
    __metadata("design:type", String)
], GoogleUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://', description: 'User avatar' }),
    __metadata("design:type", String)
], GoogleUserDto.prototype, "avatarURL", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'I1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2EzN',
        description: 'Google ID',
    }),
    __metadata("design:type", String)
], GoogleUserDto.prototype, "googleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'iIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2Ez', description: 'User verificationToken' }),
    __metadata("design:type", String)
], GoogleUserDto.prototype, "verificationToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'true', description: 'User email verify' }),
    __metadata("design:type", String)
], GoogleUserDto.prototype, "verify", void 0);
exports.GoogleUserDto = GoogleUserDto;
//# sourceMappingURL=google.user.dto.js.map