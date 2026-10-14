
# RadarMAE

### RadarMAE: Injecting Physical Inductive Biases into Masked Autoencoders for Advanced Radar Object Detection

**NeurIPS 2026 — Accepted**

**[Read Paper (PDF)](./RadarMAE.pdf)**

## Overview

RadarMAE is a physics-aware self-supervised learning framework
for radar-based autonomous driving perception.

It introduces three radar-specific learning components:

- Axial Tokenization
- Weighted Block Masking
- Distribution-Aware Reconstruction Loss

## Key Results

Evaluated on the K-Radar dataset:

- BEV AP@0.3: **64.17%**
- +7.29 AP points over Vanilla MAE
- +9.72 AP points over EchoFusion
- 54.2% reduction in encoder GFLOPs
  in the tokenization ablation

## Publication

Neural Information Processing Systems (NeurIPS), 2026.

First Author: EunChan Kim (DGIST)

This repository provides the paper manuscript.
