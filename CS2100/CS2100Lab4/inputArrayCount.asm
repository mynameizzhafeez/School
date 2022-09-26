# arrayCount.asm
  .data 
arrayA: .word 1, 2, 3, 4, 5, 6, 7, 8   # arrayA has 5 values
count:  .word 999             # dummy value

  .text
main:
    # code to setup the variable mappings
    la $t0, arrayA
    la $t7, count
    lw $t8, 0($t7)

    add $t1, $t0, $zero
    add $t2, $zero, $zero
    addi $t3, $t2, 32

    #loop:
    #    beq $t2, $t3, exit
    #	li $v0, 5
    #	syscall
    #	sw $v0, 0($t1)
    #    addi $t1, $t1, 4
    #    addi $t2, $t2, 4
    #    j loop
    #exit:

    # code for reading in the user value X
    li $v0, 5
    syscall
    sub $t4, $v0, 1

    # code for counting multiples of X in arrayA
    add $t1, $t0, $zero
    add $t2, $zero, $zero
    addi $t3, $t2, 32
    add $t8, $zero, $zero

    loop2:
        beq $t2, $t3, exit2
    	lw $t5, 0($t1)
        and $t6, $t5, $t4 
        addi $t1, $t1, 4
        addi $t2, $t2, 4
        bne $t6, $zero, loop2
        addi $t8, $t8, 1
        j loop2
    exit2:
    

    # code for printing result
    add $a0, $t8, $zero
    sw $t8, 0($t7)
    li $v0, 1
    syscall

    # code for terminating program
    li  $v0, 10
    syscall
