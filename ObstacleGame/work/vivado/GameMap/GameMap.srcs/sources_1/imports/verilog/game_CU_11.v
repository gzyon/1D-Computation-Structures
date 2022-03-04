/*
   This file was generated automatically by Alchitry Labs version 1.2.1.
   Do not edit this file directly. Instead edit the original Lucid source.
   This is a temporary file and any changes made to it will be destroyed.
*/

module game_CU_11 (
    input clk,
    input decrease_timer,
    input left_button,
    input right_button,
    input rst_button,
    input start_button,
    output reg [0:0] we,
    output reg [0:0] wdsel,
    output reg [3:0] asel,
    output reg [3:0] bsel,
    output reg [5:0] alufn,
    output reg [3:0] ra,
    output reg [3:0] rb,
    output reg [3:0] rc,
    output reg [15:0] lane1,
    output reg [15:0] lane2,
    output reg [15:0] lane3,
    output reg [15:0] lane4,
    output reg [15:0] lane5,
    output reg [15:0] lane6,
    output reg [15:0] player_position,
    output reg [15:0] score,
    output reg [15:0] alu_a,
    input [15:0] alufn_out
  );
  
  
  
  reg [15:0] M_col1_d, M_col1_q = 1'h0;
  reg [15:0] M_col2_d, M_col2_q = 1'h0;
  reg [15:0] M_col3_d, M_col3_q = 1'h0;
  reg [15:0] M_col4_d, M_col4_q = 1'h0;
  reg [15:0] M_col5_d, M_col5_q = 1'h0;
  reg [15:0] M_col6_d, M_col6_q = 1'h0;
  reg [15:0] M_plyr_d, M_plyr_q = 1'h0;
  reg [15:0] M_plyrscore_d, M_plyrscore_q = 1'h0;
  reg [2:0] M_selectmap_d, M_selectmap_q = 1'h0;
  reg [15:0] M_alu_inputA_d, M_alu_inputA_q = 1'h0;
  reg [15:0] M_obstacles_d, M_obstacles_q = 1'h0;
  reg [15:0] M_check_d, M_check_q = 1'h0;
  localparam START_game_fsm = 6'd0;
  localparam SET_SCORE_game_fsm = 6'd1;
  localparam CHECK_LEVEL_game_fsm = 6'd2;
  localparam INITIALISE_PLAYER_POSITION_game_fsm = 6'd3;
  localparam INITIALISE_MAP_COL_0_game_fsm = 6'd4;
  localparam INITIALISE_MAP_COL_1_game_fsm = 6'd5;
  localparam INITIALISE_MAP_COL_2_game_fsm = 6'd6;
  localparam INITIALISE_MAP_COL_3_game_fsm = 6'd7;
  localparam INITIALISE_MAP_COL_4_game_fsm = 6'd8;
  localparam INITIALISE_MAP_COL_5_game_fsm = 6'd9;
  localparam LEVEL1_game_fsm = 6'd10;
  localparam LEVEL2_game_fsm = 6'd11;
  localparam LEVEL3_game_fsm = 6'd12;
  localparam LEVEL4_game_fsm = 6'd13;
  localparam LEVEL5_game_fsm = 6'd14;
  localparam IDLE_game_fsm = 6'd15;
  localparam CHECK_LEFT_BOUNDARY_game_fsm = 6'd16;
  localparam BRANCH_LEFT_game_fsm = 6'd17;
  localparam SHIFT_PLAYER_LEFT_game_fsm = 6'd18;
  localparam CHECK_RIGHT_BOUNDARY_game_fsm = 6'd19;
  localparam BRANCH_RIGHT_game_fsm = 6'd20;
  localparam SHIFT_PLAYER_RIGHT_game_fsm = 6'd21;
  localparam SHIFT_COL_0_game_fsm = 6'd22;
  localparam SHIFT_COL_1_game_fsm = 6'd23;
  localparam SHIFT_COL_2_game_fsm = 6'd24;
  localparam SHIFT_COL_3_game_fsm = 6'd25;
  localparam SHIFT_COL_4_game_fsm = 6'd26;
  localparam SHIFT_COL_5_game_fsm = 6'd27;
  localparam SHIFT_COLS_game_fsm = 6'd28;
  localparam GET_PLAYER_POS_game_fsm = 6'd29;
  localparam CHECK_PLAYER_POS_game_fsm = 6'd30;
  localparam CHECK_REMAINING_MAP_LENGTH_game_fsm = 6'd31;
  localparam BRANCH_MAPLENGTH_game_fsm = 6'd32;
  localparam INCREASE_SCORE_game_fsm = 6'd33;
  localparam CHECK_SCORE_game_fsm = 6'd34;
  localparam BRANCH_SCORE_game_fsm = 6'd35;
  localparam GAME_OVER_game_fsm = 6'd36;
  
  reg [5:0] M_game_fsm_d, M_game_fsm_q = START_game_fsm;
  
  wire [96-1:0] M_map_out;
  reg [3-1:0] M_map_select;
  mapROM_20 map (
    .select(M_map_select),
    .out(M_map_out)
  );
  
  always @* begin
    M_game_fsm_d = M_game_fsm_q;
    M_plyrscore_d = M_plyrscore_q;
    M_plyr_d = M_plyr_q;
    M_alu_inputA_d = M_alu_inputA_q;
    M_obstacles_d = M_obstacles_q;
    M_selectmap_d = M_selectmap_q;
    M_col6_d = M_col6_q;
    M_col4_d = M_col4_q;
    M_col5_d = M_col5_q;
    M_check_d = M_check_q;
    M_col2_d = M_col2_q;
    M_col3_d = M_col3_q;
    M_col1_d = M_col1_q;
    
    lane1 = M_col1_q;
    lane2 = M_col2_q;
    lane3 = M_col3_q;
    lane4 = M_col4_q;
    lane5 = M_col5_q;
    lane6 = M_col6_q;
    player_position = M_plyr_q;
    score = M_plyrscore_q;
    alu_a = M_alu_inputA_q;
    we = 1'h0;
    wdsel = 1'h0;
    asel = 1'h0;
    bsel = 1'h0;
    alufn = 1'h0;
    ra = 1'h0;
    rb = 1'h0;
    rc = 11'h457;
    M_map_select = M_selectmap_q;
    
    case (M_game_fsm_q)
      START_game_fsm: begin
        if (start_button) begin
          M_game_fsm_d = SET_SCORE_game_fsm;
        end
      end
      SET_SCORE_game_fsm: begin
        M_plyrscore_d = 1'h0;
        M_game_fsm_d = INITIALISE_PLAYER_POSITION_game_fsm;
      end
      INITIALISE_PLAYER_POSITION_game_fsm: begin
        M_plyr_d = 16'h0020;
        M_game_fsm_d = CHECK_LEVEL_game_fsm;
      end
      CHECK_LEVEL_game_fsm: begin
        if (M_plyrscore_q == 1'h0) begin
          M_selectmap_d = 1'h0;
          M_game_fsm_d = LEVEL1_game_fsm;
        end else begin
          if (M_plyrscore_q == 1'h1) begin
            M_selectmap_d = 1'h1;
            M_game_fsm_d = LEVEL2_game_fsm;
          end else begin
            if (M_plyrscore_q == 2'h2) begin
              M_selectmap_d = 4'ha;
              M_game_fsm_d = LEVEL3_game_fsm;
            end else begin
              if (M_plyrscore_q == 2'h3) begin
                M_selectmap_d = 4'hb;
                M_game_fsm_d = LEVEL4_game_fsm;
              end else begin
                if (M_plyrscore_q == 3'h4) begin
                  M_selectmap_d = 7'h64;
                  M_game_fsm_d = LEVEL5_game_fsm;
                end
              end
            end
          end
        end
      end
      LEVEL1_game_fsm: begin
        M_col1_d = M_map_out[0+15-:16];
        M_col2_d = M_map_out[16+15-:16];
        M_col3_d = M_map_out[32+15-:16];
        M_col4_d = M_map_out[48+15-:16];
        M_col5_d = M_map_out[64+15-:16];
        M_col6_d = M_map_out[80+15-:16];
        M_game_fsm_d = IDLE_game_fsm;
      end
      LEVEL2_game_fsm: begin
        M_col1_d = M_map_out[0+15-:16];
        M_col2_d = M_map_out[16+15-:16];
        M_col3_d = M_map_out[32+15-:16];
        M_col4_d = M_map_out[48+15-:16];
        M_col5_d = M_map_out[64+15-:16];
        M_col6_d = M_map_out[80+15-:16];
        M_game_fsm_d = IDLE_game_fsm;
      end
      LEVEL3_game_fsm: begin
        M_col1_d = M_map_out[0+15-:16];
        M_col2_d = M_map_out[16+15-:16];
        M_col3_d = M_map_out[32+15-:16];
        M_col4_d = M_map_out[48+15-:16];
        M_col5_d = M_map_out[64+15-:16];
        M_col6_d = M_map_out[80+15-:16];
        M_game_fsm_d = IDLE_game_fsm;
      end
      LEVEL4_game_fsm: begin
        M_col1_d = M_map_out[0+15-:16];
        M_col2_d = M_map_out[16+15-:16];
        M_col3_d = M_map_out[32+15-:16];
        M_col4_d = M_map_out[48+15-:16];
        M_col5_d = M_map_out[64+15-:16];
        M_col6_d = M_map_out[80+15-:16];
        M_game_fsm_d = IDLE_game_fsm;
      end
      LEVEL5_game_fsm: begin
        M_col1_d = M_map_out[0+15-:16];
        M_col2_d = M_map_out[16+15-:16];
        M_col3_d = M_map_out[32+15-:16];
        M_col4_d = M_map_out[48+15-:16];
        M_col5_d = M_map_out[64+15-:16];
        M_col6_d = M_map_out[80+15-:16];
        M_game_fsm_d = IDLE_game_fsm;
      end
      IDLE_game_fsm: begin
        we = 1'h0;
        wdsel = 1'h0;
        if (decrease_timer) begin
          M_game_fsm_d = SHIFT_COL_0_game_fsm;
        end else begin
          if (left_button && ~right_button) begin
            M_game_fsm_d = CHECK_LEFT_BOUNDARY_game_fsm;
          end else begin
            if (right_button && ~left_button) begin
              M_game_fsm_d = CHECK_RIGHT_BOUNDARY_game_fsm;
            end
          end
        end
      end
      CHECK_LEFT_BOUNDARY_game_fsm: begin
        if (M_plyr_q == 16'h0020) begin
          M_game_fsm_d = IDLE_game_fsm;
        end else begin
          M_game_fsm_d = SHIFT_PLAYER_LEFT_game_fsm;
        end
      end
      SHIFT_PLAYER_LEFT_game_fsm: begin
        bsel = 1'h1;
        alufn = 17'h186a0;
        M_alu_inputA_d = M_plyr_q;
        M_game_fsm_d = IDLE_game_fsm;
      end
      CHECK_RIGHT_BOUNDARY_game_fsm: begin
        if (M_plyr_q == 16'h0001) begin
          M_game_fsm_d = IDLE_game_fsm;
        end else begin
          M_game_fsm_d = SHIFT_PLAYER_RIGHT_game_fsm;
        end
      end
      SHIFT_PLAYER_RIGHT_game_fsm: begin
        bsel = 1'h1;
        alufn = 17'h186a1;
        M_alu_inputA_d = M_plyr_q;
        M_game_fsm_d = IDLE_game_fsm;
      end
      SHIFT_COL_0_game_fsm: begin
        bsel = 1'h1;
        alufn = 17'h186a1;
        M_alu_inputA_d = M_col1_q;
        M_col1_d = alufn_out;
        M_game_fsm_d = SHIFT_COL_1_game_fsm;
      end
      SHIFT_COL_1_game_fsm: begin
        bsel = 1'h1;
        alufn = 17'h186a1;
        M_alu_inputA_d = M_col2_q;
        M_col2_d = alufn_out;
        M_game_fsm_d = SHIFT_COL_2_game_fsm;
      end
      SHIFT_COL_2_game_fsm: begin
        bsel = 1'h1;
        alufn = 17'h186a1;
        M_alu_inputA_d = M_col3_q;
        M_col3_d = alufn_out;
        M_game_fsm_d = SHIFT_COL_3_game_fsm;
      end
      SHIFT_COL_3_game_fsm: begin
        bsel = 1'h1;
        alufn = 17'h186a1;
        M_alu_inputA_d = M_col4_q;
        M_col4_d = alufn_out;
        M_game_fsm_d = SHIFT_COL_4_game_fsm;
      end
      SHIFT_COL_4_game_fsm: begin
        bsel = 1'h1;
        alufn = 17'h186a1;
        M_alu_inputA_d = M_col5_q;
        M_col5_d = alufn_out;
        M_game_fsm_d = SHIFT_COL_5_game_fsm;
      end
      SHIFT_COL_5_game_fsm: begin
        bsel = 1'h1;
        alufn = 17'h186a1;
        M_alu_inputA_d = M_col6_q;
        M_col6_d = alufn_out;
        M_game_fsm_d = SHIFT_COLS_game_fsm;
      end
      SHIFT_COLS_game_fsm: begin
        M_obstacles_d = M_plyr_q || {M_col1_q[0+0-:1], M_col2_q[0+0-:1], M_col3_q[0+0-:1], M_col4_q[0+0-:1], M_col5_q[0+0-:1], M_col6_q[0+0-:1]};
        M_game_fsm_d = CHECK_PLAYER_POS_game_fsm;
      end
      CHECK_PLAYER_POS_game_fsm: begin
        if (M_obstacles_q[0+0-:1] == 1'h1 || M_obstacles_q[1+0-:1] == 1'h1 || M_obstacles_q[2+0-:1] == 1'h1 || M_obstacles_q[3+0-:1] == 1'h1 || M_obstacles_q[4+0-:1] == 1'h1 || M_obstacles_q[5+0-:1] == 1'h1) begin
          M_game_fsm_d = GAME_OVER_game_fsm;
        end else begin
          M_game_fsm_d = CHECK_REMAINING_MAP_LENGTH_game_fsm;
        end
      end
      CHECK_REMAINING_MAP_LENGTH_game_fsm: begin
        bsel = 4'ha;
        alufn = 17'h1adbb;
        M_alu_inputA_d = M_col6_q;
        M_check_d = alufn_out;
        M_game_fsm_d = BRANCH_MAPLENGTH_game_fsm;
      end
      BRANCH_MAPLENGTH_game_fsm: begin
        if (~M_check_q[0+0-:1]) begin
          M_game_fsm_d = IDLE_game_fsm;
        end else begin
          M_game_fsm_d = INCREASE_SCORE_game_fsm;
        end
      end
      INCREASE_SCORE_game_fsm: begin
        bsel = 1'h1;
        alufn = 1'h0;
        M_alu_inputA_d = M_plyrscore_q;
        M_plyrscore_d = alufn_out;
        M_game_fsm_d = CHECK_SCORE_game_fsm;
      end
      CHECK_SCORE_game_fsm: begin
        bsel = 4'hb;
        alufn = 17'h1adbb;
        M_alu_inputA_d = M_plyrscore_q;
        M_check_d = alufn_out;
        M_game_fsm_d = BRANCH_SCORE_game_fsm;
      end
      BRANCH_SCORE_game_fsm: begin
        if (~M_check_q[0+0-:1]) begin
          M_game_fsm_d = CHECK_LEVEL_game_fsm;
        end else begin
          M_game_fsm_d = GAME_OVER_game_fsm;
        end
      end
      GAME_OVER_game_fsm: begin
        M_col1_d = 16'hffff;
        M_col2_d = 16'hffff;
        M_col3_d = 16'hffff;
        M_col4_d = 16'hffff;
        M_col5_d = 16'hffff;
        M_col6_d = 16'hffff;
        if (rst_button) begin
          M_game_fsm_d = SET_SCORE_game_fsm;
        end else begin
          M_game_fsm_d = GAME_OVER_game_fsm;
        end
      end
    endcase
  end
  
  always @(posedge clk) begin
    M_col1_q <= M_col1_d;
    M_col2_q <= M_col2_d;
    M_col3_q <= M_col3_d;
    M_col4_q <= M_col4_d;
    M_col5_q <= M_col5_d;
    M_col6_q <= M_col6_d;
    M_plyr_q <= M_plyr_d;
    M_plyrscore_q <= M_plyrscore_d;
    M_selectmap_q <= M_selectmap_d;
    M_alu_inputA_q <= M_alu_inputA_d;
    M_obstacles_q <= M_obstacles_d;
    M_check_q <= M_check_d;
    M_game_fsm_q <= M_game_fsm_d;
  end
  
endmodule
