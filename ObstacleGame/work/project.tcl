set projDir "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/vivado"
set projName "GameMap"
set topName top
set device xc7a35tftg256-1
if {[file exists "$projDir/$projName"]} { file delete -force "$projDir/$projName" }
create_project $projName "$projDir/$projName" -part $device
set_property design_mode RTL [get_filesets sources_1]
set verilogSources [list "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/au_top_0.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/reset_conditioner_1.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/edge_detector_2.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/button_conditioner_3.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/beta_4.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/multi_seven_seg_5.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/mapLED_6.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/playerLED_7.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/ws2812b_writer_8.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/pipeline_9.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/alu_10.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/game_CU_11.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/counter_12.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/counter_13.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/seven_seg_14.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/decoder_15.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/adder_16.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/boolean_17.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/shifter_18.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/compare_19.v" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/verilog/mapROM_20.v" ]
import_files -fileset [get_filesets sources_1] -force -norecurse $verilogSources
set xdcSources [list "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/constraint/alchitry.xdc" "C:/Program\ Files/Alchitry/Alchitry\ Labs/library/components/au.xdc" "C:/Users/zhiyi/Documents/alchitry/ObstacleGame/work/constraint/custom.xdc" ]
read_xdc $xdcSources
set_property STEPS.WRITE_BITSTREAM.ARGS.BIN_FILE true [get_runs impl_1]
update_compile_order -fileset sources_1
launch_runs -runs synth_1 -jobs 8
wait_on_run synth_1
launch_runs impl_1 -to_step write_bitstream -jobs 8
wait_on_run impl_1
