uniform vec3 u_color;
uniform sampler2D tMap;
uniform float u_alpha;
uniform float u_scroll;

varying vec2 v_uv;

void main()
{
  vec3 color = texture2D(tMap, v_uv).rgb;

  float signed = max(min(color.r, color.g), min(max(color.r, color.g), color.b)) - 0.5;
  float d = fwidth(signed);
  float alpha = smoothstep(-d, d, signed);
  if (alpha < 0.02) discard;

  //alpha += u_alpha;

  gl_FragColor = vec4(u_color, alpha);
}
