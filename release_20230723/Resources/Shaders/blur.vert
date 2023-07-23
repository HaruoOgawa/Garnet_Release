#version 450

layout(location = 0) in vec3 inPosition;
layout(location = 1) in vec3 inNormal;
layout(location = 2) in vec2 inTexcoord;
layout(location = 3) in vec4 inTangent;
layout(location = 4) in vec4 inBioTangent;

layout(location = 0) out vec2 f_UV;

void main() {
    gl_Position = vec4(inPosition, 1.0);
    f_UV = inTexcoord;
}