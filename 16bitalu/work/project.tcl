set projDir "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/vivado"
set projName "16bitalu"
set topName top
set device xc7a35tftg256-1
if {[file exists "$projDir/$projName"]} { file delete -force "$projDir/$projName" }
create_project $projName "$projDir/$projName" -part $device
set_property design_mode RTL [get_filesets sources_1]
set verilogSources [list "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/au_top_0.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/reset_conditioner_1.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/multi_seven_seg_2.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/alu_3.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/store_value_4.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/counter_5.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/seven_seg_6.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/decoder_7.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/adder_8.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/boolean_9.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/shifter_10.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/compare_11.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/modulo_12.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/edge_detector_13.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/button_conditioner_14.v" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/verilog/pipeline_15.v" ]
import_files -fileset [get_filesets sources_1] -force -norecurse $verilogSources
set xdcSources [list "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/constraint/alchitry.xdc" "C:/Users/zhiyi/Documents/alchitry/16bitalu/work/constraint/io.xdc" "C:/Program\ Files/Alchitry/Alchitry\ Labs/library/components/au.xdc" ]
read_xdc $xdcSources
set_property STEPS.WRITE_BITSTREAM.ARGS.BIN_FILE true [get_runs impl_1]
update_compile_order -fileset sources_1
launch_runs -runs synth_1 -jobs 8
wait_on_run synth_1
launch_runs impl_1 -to_step write_bitstream -jobs 8
wait_on_run impl_1
